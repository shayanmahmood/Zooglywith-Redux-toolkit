import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypingText } from "../Slice/TypingTextSlice";

const TyperDataMaker = () => {
    // const { typingText } = useFuture()
    const { typingText } = useSelector(store => store.typingText)
    const { message } = useSelector(store => store.general)
    const createMarkup = (text) => ({ __html: text });
    const dispatch = useDispatch()

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (message) {
                // dispatch({ type: 'setTypingText', payload: message.substring(0, i) })
                dispatch(setTypingText(message.substring(0, i)))
                i++;

                if (i > message.length) {
                    clearInterval(typingInterval);
                }
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [message]);

    return (
        <div id="typing-container" style={{ zIndex: '1000', position: 'relative', width: '1000px', height: '500px', border: 'none', marginLeft: '250px', marginTop: '150px' }}>
            <div id="typing-box" style={{ border: 'none' }} dangerouslySetInnerHTML={createMarkup(typingText)} />
        </div>
    );
};

export default TyperDataMaker;





























