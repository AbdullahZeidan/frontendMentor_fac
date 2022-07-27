import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Chevron from './Chevron';

type AccordionItemProps = {
    title: string;
    body: React.ReactNode;
};
export default function AccordionItem({ title, body }: AccordionItemProps) {
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
        <div className={clsx('accordionItem', expanded ? 'accordionItem--active' : '')}>
            <h2 className="accordionTitle" onClick={() => setExpanded(!expanded)}>
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
