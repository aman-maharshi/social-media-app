import { useEffect } from "react"

function FlashMessage({ flashMessage, setFlashMessage }) {
    let messageClass = flashMessage ? "flashMessage flashMessage--show" : "flashMessage"

    useEffect(() => {
        let hideMessage = setTimeout(() => setFlashMessage(null), 2500)
        return () => {
            clearTimeout(hideMessage)
        }
    }, [flashMessage, setFlashMessage])

    return (
        <>
            {flashMessage && (
                <div className={messageClass}>
                    <p>{flashMessage}</p>
                </div>
            )}
        </>
    )
}

export default FlashMessage
