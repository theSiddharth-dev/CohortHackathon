import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react'

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars ,words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'chars,lines,' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
            opacity: 0,
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duraiton: 1.8,
            ease: 'expo.out',
            stagger: '0.05',
            delay: 1,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
                .to(".left-leaf", { y:-200 }, 0)

                .to(".right-leaf", { y: 200 }, 0)
    }, [])
    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title ">
                    MARTINI
                </h1>

                <img src="/images/hero-left-leaf.png" className="left-leaf" alt="leaf.png" />
                <img src="/images/hero-right-leaf.png" className="right-leaf" alt="leaf.png" />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool .Crisp .Classic.</p>
                            <p className="subtitle">
                                Experience the best of Italian cuisine with our signature martini.
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                            </p>
                            <a href="#cocktails" >View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero