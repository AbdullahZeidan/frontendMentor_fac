import React from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';
import './illustration.css';

export default function Accordion() {
    return (
        <div className="accordion">
            <section>
                <div className="illustration__container-mobile relative">
                    <img
                        style={{
                            top: '0',
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
            </section>

            <section>
                <h1 className="accordion__heading">FAQ</h1>
                <div className="accordion__container">
                    <AccordionItem
                        title="How many team members can I invite?"
                        body="You can invite up to 2 additional users on the Free plan. There is no
                limit on team members for the Premium plan."
                    />
                    <AccordionItem
                        title="What is the maximum file upload size?"
                        body="No more than 2GB. All files in your account must fit your allotted
                storage space."
                    />
                    <AccordionItem
                        title="How do I reset my password?"
                        body="Click “Forgot password” from the login page or “Change password” from
                your profile page. A reset link will be emailed to you."
                    />
                    <AccordionItem
                        title="Can I cancel my subscription?"
                        body="Yes! Send us a message and we’ll process your request no questions
                    asked."
                    />

                    <AccordionItem
                        title="Do you provide additional support?"
                        body="Chat and email support is available 24/7. Phone lines are open during
                normal business hours."
                    />
                </div>
            </section>
        </div>
    );
}
