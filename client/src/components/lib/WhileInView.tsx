"use client"
import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function WhileInView({ children }: { children: React.ReactNode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()
    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
        else{
            mainControls.start('hidden')
        }
    }, [isInView, mainControls])
    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity: 1, y: 0}
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration: 1 , delay:0.25}}
            >
                {children}
            </motion.div>
        </div>
    )
}