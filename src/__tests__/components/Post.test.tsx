import { render } from '@testing-library/react'
import Post from '@/components/Post'
import { post1 } from '@/mocks/postsData'

it('Must render Post component with data', () => {
    const component = render(<Post post={post1} />)
    const name = component.getByText(post1.username)
    const description = component.getByText(post1.description)
    const location = component.getByText(post1.location)
    const time = component.getByText(post1.time)
    expect(name).toBeDefined()
    expect(description).toBeDefined()
    expect(location).toBeDefined()
    expect(time).toBeDefined()
})