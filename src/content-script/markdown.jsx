import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

export function MarkdownRender(props) {
  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} {...props}>
      {props.children}
    </ReactMarkdown>
  )
}

MarkdownRender.propTypes = {
  ...ReactMarkdown.propTypes,
}

export default MarkdownRender
