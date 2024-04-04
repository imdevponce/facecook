import { render } from '@testing-library/react'
import Footer from '@/components/Footer'

it('Must render Footer component with data', () => {
    const component = render(<Footer />)
    const brand = component.getByText('FaceCook')
    expect(brand).toBeDefined()
})