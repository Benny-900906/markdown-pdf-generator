import { LineNumber } from './MarkdownComponents/LineNumber';
import { useState, useEffect } from 'react';
import { useMarkdownToHTML } from '../hooks/useMarkdownToHTML';

export const MarkdownPanel = ({ setRenderedContent }) => {

  const [scrollTop, setScrollTop] = useState(0);
  const [markdownContent, setMarkdownContent] = useState('');
  const renderedContent = useMarkdownToHTML(markdownContent);

  useEffect(() => {
    setRenderedContent(renderedContent);
  }, [renderedContent]);

  const handleMarkdownChange = (e) => {
    setMarkdownContent(e.target.value);
  }

  const handleTextareaScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  }

  return (
    <>
      <div className="w-[50%] h-full bg-[#1B1B1B] overflow-y-hidden flex flex-row px-2">
        <LineNumber text={markdownContent} scrollTop={scrollTop} />
        <textarea
          className="resize-none w-full h-full focus:outline-none px-2 bg-[#1B1B1B] overflow-y-scroll"
          value={markdownContent}
          onChange={handleMarkdownChange}
          onScroll={handleTextareaScroll}
          placeholder=""
        ></textarea>
      </div>
    </>
  );
}