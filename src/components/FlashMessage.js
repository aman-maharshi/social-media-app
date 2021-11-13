import { useEffect, useContext } from "react"
import UserContext from "../UserContext"

function FlashMessage({ flashMessage }) {
    const { setFlashMessage } = useContext(UserContext)
    let messageClass = flashMessage ? "flashMessage flashMessage--show" : "flashMessage"

    useEffect(() => {
        let hideMessage = setTimeout(() => setFlashMessage(null), 3000)
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
