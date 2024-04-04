import { render } from '@testing-library/react'
import Post from '@/components/Post'
import { post1 } from '@/mocks/postsData'

it('Must render Post component', () => {
    const component = render(<Post post={post1} />)
})