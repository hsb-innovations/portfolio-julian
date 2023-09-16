"use client"
import Typewriter, { TypewriterClass } from 'typewriter-effect';

const LoadingTypeWriter = () => {
    return (
        <h1 className='text-3xl font-bold mt-9'>
            <Typewriter
                onInit={(typewriter: TypewriterClass) => {
                    typewriter.typeString('Julian Hofmaninger')
                        .deleteAll()
                        .typeString("Software developer • Founder • Entrepreneur")
                        .deleteAll()
                        .start()
                }} />
        </h1>
    )
}
export default LoadingTypeWriter;