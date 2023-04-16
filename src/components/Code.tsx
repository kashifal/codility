import { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import {CopyToClipboard} from 'react-copy-to-clipboard';


import theme from 'prism-react-renderer/themes/vsLight' 


import Highlight, { defaultProps } from 'prism-react-renderer'    

const codeLanguage = 'javascript'
const code = `https://dummyjson.com/products/1`

const tabs = [
  { name: 'App.js', isActive: true },
  { name: 'package.json', isActive: false },
]

function TrafficLightsIcon(props:any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function CodeSection() {
    const [isCopied, setIsCopied] = useState(false);


  return (
    <div className="overflow-hidden bg-white dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-4">
        <div className="mx-auto grid  grid-cols-1 items-center gap-x-8 gap-y-16  lg:grid-cols-1 ">
           
          <div className="relative lg:static">
          
            <div className="relative">
              
              <div className="relative rounded-2xl  ring-1 ring-white/10 backdrop-blur">  
                <div className=" "> 
                <h1 className='font-semibold'>Try: API</h1>
                  <div className="mt-6 flex items-start  text-sm">
                    <div
                      aria-hidden="true"
                      className="select-none border-r border-slate-600  font-mono text-white"
                    >
                      
                      
                    </div>
                    
                    <Highlight
                      {...defaultProps}
                      code={code}
                      language={codeLanguage}
                      theme={theme}
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={clsx(
                            className,
                            'flex w-full overflow-x-auto pb-6'
                          )}
                          style={style}
                        >
                          <code className="px-4">
                            {tokens.map((line, lineIndex) => (
                              <div key={lineIndex} {...getLineProps({ line })}>
                                {line.map((token, tokenIndex) => (
                                  <span
                                    key={tokenIndex}
                                    {...getTokenProps({ token })}
                                  />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>

                    <CopyToClipboard
          text={code}
          onCopy={() => setIsCopied(true)}
        >
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white px-2 py-1 rounded-lg"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
