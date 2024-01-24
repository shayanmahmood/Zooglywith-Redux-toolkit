import Name from "../NameGiver/Name"
import ImageUploader from "../ImageUploader/ImageUploader"
import { useDispatch, useSelector } from "react-redux"
import { DecStep, IncStep } from "../slice/generealSlice"
import { useEffect } from "react"
import { ShowChooseFalse, ShowFalse } from "../../boolean/slice/BooleanSlice"

function Slides() {
    const { step } = useSelector(store => store.general)
    const dispatch = useDispatch()


    useEffect(function () {
        dispatch(ShowChooseFalse())
        dispatch(ShowFalse())
    }, [step])


    function handlePre() {
        if (step > 1) dispatch(DecStep())
    }

    function handleNext() {
        if (step < 3) dispatch(IncStep())
    }
    return (
        <>
            <h1 style={{ marginTop: '24px', marginLeft: '30px' }}>Zoogle</h1>

            {step === 1 ? <Name /> : null}
            {step === 2 || step === 3 ? <ImageUploader /> : null}
            {
                step > 1 ? <button style={{
                    marginLeft: '382px',
                    position: 'absolute',
                    marginTop: `${step <= 2 ? '-30px' : '-90px'}`
                }} className="color-8" onClick={handlePre}>Previous</button> : null
            }
            {step < 3 ? <button style={{
                position: 'absolute',
                left: '27%',
                marginTop: `${step <= 2 ? '-30px' : '-300px'}`

            }} className="color-8" onClick={handleNext} >Next</button> : null}
        </>
    )
}

export default Slides
