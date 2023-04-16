import React, { useState } from "react";

function App() {
    const [fileUrl, setFileUrl] = useState("kcjvlkjvlkfdjlk");

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        setFileUrl(fileUrl);
    };

    const handleClearButtonClick = () => {
        setFileUrl("");
    };

    return (
        <div className="max-w-7xl py-16 mx-auto mt-8">
            <div className="p-4 ">
                <div className="dropzone text-shade px-lh py-05lh cursor-pointer border-2 border-dashed border-black border-opacity-10">
                    <label
                        htmlFor="dropzone-file"
                        className="dark:hover:bg-bray-800 flex  w-full cursor-pointer flex-col items-start px-6 justify-center rounded-lg border-2 border-dashed border-gray-300 bg-red-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <input
                            type="file"
                            id="dropzone-file"
                            className="absolute left-0 top-0 h-full w-full hidden"
                            onChange={handleFileInputChange}
                        />
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon"
                                role="presentation"
                            >
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                                <polyline points="17 8 12 3 7 8"></polyline>
                                <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                            Drop a file or click to select
                            <div className="flex">
                                <div className="truncate pt-1 text-sm">{fileUrl}</div>
                                <button
                                    title="Clear"
                                    type="button"
                                    className="pointer-events-auto ml-1 flex-shrink p-1 hover:bg-black hover:text-white"
                                    onClick={handleClearButtonClick}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="icon"
                                        role="presentation"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}



export default App;