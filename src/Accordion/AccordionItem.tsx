import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Chevron from './Chevron';

type AccordionItemProps = {
    title: string;
    index: number;
    body: React.ReactNode;
    active?: boolean;
    onToggle: (idx: number) => void;
};
export default function AccordionItem({
    title,
    index,
    body,
    active,
    onToggle,
}: AccordionItemProps) {
    const bodyRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!active) collapseAccordion(bodyRef.current!);
        else expandAccordion(bodyRef.current!);
    }, [active]);

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
        if (active) {
            bodyEl.style.height = '';
        }
    }

    return (
        <div className={clsx('accordion__item', active ? 'accordion__item--active' : '')}>
            <h2 className="accordion__title" onClick={() => onToggle(index)}>
                {title} <Chevron />
            </h2>
            <p
                ref={bodyRef}
                className="accordion__body"
                onTransitionEnd={() => resetInlineHeight(bodyRef.current!)}
            >
                {body}
            </p>
        </div>
    );
}
