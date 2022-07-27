import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Chevron from './Chevron';
import './Accordion.css';

export default function Accordion() {
    return (
        <div className="accordion">
            <h1 className="text-center">FAQ</h1>

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
    );
}

type AccordionItemProps = {
    title: string;
    body: React.ReactNode;
};
export function AccordionItem({ title, body }: AccordionItemProps) {
    const [expanded, setExpanded] = useState(false);
    const bodyRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!expanded) collapseAccordion(bodyRef.current!);
        else expandAccordion(bodyRef.current!);
    }, [expanded]);

    function collapseAccordion(bodyEl: HTMLParagraphElement) {
        const elementHeight = bodyEl.scrollHeight;
        const elementTransition = bodyEl.style.transition;
        bodyEl.style.transition = '';

        requestAnimationFrame(() => {
            bodyEl.style.height = elementHeight + 'px';
            bodyEl.style.transition = elementTransition;
            requestAnimationFrame(() => {
                bodyEl.style.height = '0px';
                bodyEl.style.marginBottom = '0rem';
            });
        });
    }
    function expandAccordion(bodyEl: HTMLParagraphElement) {
        requestAnimationFrame(() => {
            bodyEl.style.height = bodyEl.scrollHeight + 'px';
            bodyEl.style.marginBottom = '1rem';
        });
    }

    function resetInlineHeight(bodyEl: HTMLParagraphElement) {
        if (expanded) {
            bodyEl.style.height = '';
        }
    }

    return (
        <div
            className={clsx('accordionItem', expanded ? 'accordionItem--active' : '')}
            onClick={() => setExpanded(!expanded)}
        >
            <h2 className="accordionTitle">
                {title} <Chevron />
            </h2>
            <p
                ref={bodyRef}
                className="accordionBody"
                onTransitionEnd={() => resetInlineHeight(bodyRef.current!)}
            >
                {body}
            </p>
        </div>
    );
}
