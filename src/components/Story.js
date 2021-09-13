import React from 'react';

const Story = (props) => {
  const { title, author, num_comments, created_at, url } = props;
  const createdDateFormatted = new Date(created_at).toLocaleDateString('en-US')

  return (
    <div className="storyContainer">
      <a
        className="storyLink"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
      <div>
        By {author} | {num_comments} | {createdDateFormatted}
      </div>
    </div>
  );
}

export default Story;
