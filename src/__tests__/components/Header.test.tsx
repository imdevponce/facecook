import { render } from '@testing-library/react'
import Header from '@/components/Header'
it('Must render Header component with data', () => {
    const component = render(<Header />)
    const img = component.getByRole('img')
    expect(img).toBeDefined()
})
