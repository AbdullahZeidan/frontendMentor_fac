import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';
import './illustration.css';

const ACCORDION_ITEMS = [
    {
        title: 'How many team members can I invite?',
        body: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
        title: 'What is the maximum file upload size?',
        body: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
        title: 'How do I reset my password?',
        body: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    },
    {
        title: 'Can I cancel my subscription?',
        body: 'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
        title: 'Do you provide additional support?',
        body: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
];

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(-1);

    function handleToggle(idx: number) {
        if (idx === activeIndex) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(idx);
        }
    }

    return (
        <div className="accordion">
            <section>
                <div className="illustration__container-mobile relative">
                    <img
                        style={{
                            inset: '0',
                        }}
                        width={'65%'}
                        src="/illustration-woman-online-mobile.svg"
                        className="absolute"
                    />
                    <img
                        width={'65%'}
                        style={{
                            top: '40px',
                        }}
                        src="/bg-pattern-mobile.svg"
                    />
                </div>
                <div className="illustration__container-desktop relative">
                    <div className="clipper overflow-wrap relative">
                        <img
                            src="/illustration-woman-online-desktop.svg"
                            className="illustration-woman"
                        />
                        <img src="/bg-pattern-desktop.svg" className="pattern-desktop" />
                    </div>
                        <img src="/illustration-box-desktop.svg" className="box" />
                </div>
            </section>

            <section id="faq" aria-label="faq">
                <h1 className="accordion__heading">FAQ</h1>
                <div className="accordion__container">
                    {ACCORDION_ITEMS.map(({ title, body }, idx) => (
                        <AccordionItem
                            key={title}
                            title={title}
                            body={body}
                            index={idx}
                            onToggle={handleToggle}
                            active={idx === activeIndex}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
