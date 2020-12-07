import styled from "styled-components";

const Item = styled.div`
  .bg-pwhite;
  .w-full;
  .lg: w-3/12;
  box-sizing: border-box;
  .p-4;
  .shadow;
  .mx-2;
  .my-4;
  border-radius: 10px;
`;

const Image = styled.img`
  height: 100px;
  max-height: 100px;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  .text-2xl;
  font-weight: bold;
  overflow:hidden;
`;

const List = styled.div`
  .flex;
  .mt-4;
  .items-center;
`;

const Icon = styled.img`
  height: 25px;
  .mr-4;
`;

const Embed = styled.embed`
  .w-full;
`;

const Thumbnail = styled.img`
  .w-full;
`;

const KnowMore = styled.div`
  .bg-red-800;
  .text-pwhite;
  .flex;
  .justify-center;
  .items-center;
  width: auto;
  .mt-4;
  .py-2;
  .px-8;
  border-radius: 5px;
  font-weight: 700;
`;

const EntityComponent = ({ data }) => {
  const { title, host, date, desc, slides, video, code, url, embed, knowMore, buy, thumbnail, repo, docs, npm, demo_url } = data;
  return (
    <Item>
      {embed && <Embed src={embed} />}
      {thumbnail && <Thumbnail src={thumbnail} alt={title} />}
      <Title>{title}</Title>
      {desc && <List>{desc}</List>}
      {host && <List style={{fontWeight: 700}}>{host}</List>}
      {date && <List>{date}</List>}
      {slides && (
        <a href={slides} target="_blank" rel="noopener noreferrer">
          <List>
            <Icon src="/icons/slides.svg" alt="Link to Slides" />
            Slides
          </List>
        </a>
      )}
      {repo && (
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <List>
            <Icon src="/social/github.svg" alt="Link to Github repo" />
            Github repo
          </List>
        </a>
      )}
      {docs && (
        <a href={docs} target="_blank" rel="noopener noreferrer">
          <List>
            <Icon src="/icons/docs.svg" alt="Link to Github docs" />
            Official docs
          </List>
        </a>
      )}
      {demo_url && (
        <a href={demo_url} target="_blank" rel="noopener noreferrer">
          <List>
            <Icon src="/icons/demo.svg" alt="Link to Demo" />
            Demo
          </List>
        </a>
      )}
      {npm && (
        <a href={npm} target="_blank" rel="noopener noreferrer">
          <List>
            <Icon src="/icons/npm.svg" alt="Link to Npm" />
            Npm link
          </List>
        </a>
      )}
      {video && (
        <a href={video} target="_blank" rel="noopener noreferrer">
          <List>
            <Icon src="/icons/video.svg" alt="Link to Videos" />
            Video
          </List>
        </a>
      )}
      {code && (
        <a href={code} target="_blank" rel="noopener noreferrer">
          <List>
            <Icon src="/icons/code.svg" alt="Link to Demo Code" />
            Demo code
          </List>
        </a>
      )}
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <List>
            <Icon src="/icons/url.svg" alt="Link to the Blog" />
            Read blog
          </List>
        </a>
      )}
      {
        knowMore && <a href={knowMore} target="_blank" rel="noopener noreferrer">
          <KnowMore>Know More</KnowMore>
        </a>
      }
    </Item>
  );
};

export default EntityComponent;
