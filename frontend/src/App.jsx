import PageTitle from './components/PageTitle'
import { GoogleGenerativeAI } from '@google/generative-ai'
import React, { useState } from 'react'
import { IoIosSend } from 'react-icons/io'
import { FaRegClipboard } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const apiKey = 'AIzaSyBuW3vsMI9uNBMjLm9Ds1lJCMR_q2vOHWE'
const genAI = new GoogleGenerativeAI(apiKey)

const cleanResponse = text => {
  text = text.trim().replace(/\*+/g, '')
  text = text.replace(/[\n\t\r]/g, '')
  let lines = text.split('\n')
  let formattedLines = []

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim()
    if (line.startsWith('```') || line.startsWith('~~~')) {
      codeBlock += lines[++i] + '\n'
      if (codeBlock) {
        formattedLines.push(codeBlock)
      }
    } else {
      formattedLines.push(line)
    }
  }
  return formattedLines.join('\n')
}
function App () {
  const [message, setMessage] = useState('Inscribe something...')
  const [response, setResponse] = useState(' ')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const model = genAI.getGenerativeModel({
        model: 'gemini-pro',
        generationConfig: {
          maxOutputTokens: 3000,
          temperature: 0.7
        }
      })

      const chat = model.startChat({ history: [] })
      const result = await chat.sendMessage(message)
      const text = result.response.text()
      const cleanedResponse = cleanResponse(text)
      setResponse(cleanedResponse)
    } catch (error) {
      console.error('Error:', error)
      setResponse('Ocurrió un error al enviar el mensaje')
    }
  }

  const handleCopy = color => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(color)
      return toast.success('Response has been copied!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  return (
    <>
      <PageTitle title='LuckyStream - Personal AI Assistant' />
      <div className='w-full flex flex-col gap-1 min-h-[100vh] items-center  '>
        {/*Top app Bar*/}
        <ToastContainer />

        <div className='flex flex-col min-h-screen md:flex-row w-full gap-2 p-1 bg-gradient-to-b from-black  to-dark-onPrimary'>
          {/*main*/}
          <div className='chat-container flexflex-col gap-20 w-full'>
            <form
              onSubmit={handleSubmit}
              className='fixed bottom-2 bg-gray-500/20 backdrop-blur-md  p-2 w-full justify-between flex gap-2 rounded  md:px-4'
            >
              <input
                type='text'
                value={message}
                onClick={e => setMessage('')}
                onChange={e => setMessage(e.target.value)}
                placeholder='Enter your message...'
                className='w-[90%] rounded-full bg-light-onBackground h-10 p-4 text-gray-600'
              />
              <button
                type='submit'
                className='bg-transparent rounded-full w-[30%] md:w-[10%] flex items-center gap-2 justify-center border bg-light-surfaceTint transition hover:border-light-surfaceTint/30'
              >
                Send
                <IoIosSend />
              </button>
            </form>
            {response && (
              <p className='flex  p-2 gap-2  justify-start '>
                <strong>You:</strong>{' '}
                <div className='border  bg-light-onPrimaryContainer text-gray p-4 rounded border-dark-onPrimary flex items-center min-h-20 flex'>
                  {message}
                </div>
              </p>
            )}

            {response==' ' ? (
              <p className='w-full min-h-screen flex items-start justify-center'>
                <div className='w-[60%]  border border-dark-onPrimary rounded p-4 text-center'>
                  Hello I'am AngelicaVibes your personal assistant
                </div>
              </p>
            ) : (
              <p className='flex  p-2 gap-2  justify-end'>
                <strong>AngelicaVibes:</strong>{' '}
                <div className='border   bg-dark-primaryContainer/40 text-gray p-4 rounded border-dark-onPrimary flex items-start justify-end min-h-20  gap-4  '>
                  <div className=''>{response}</div>
                  {response != ' ' ? (
                    <div
                      className=' transition hover:text-dark-onPrimary'
                      onClick={()=>handleCopy(response)}
                    >
                      <FaRegClipboard />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
