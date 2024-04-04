import { fireEvent, render, screen } from '@testing-library/react'
import UserIcon from '@/components/icons/UserIcon'

it('Must render Post component with data', () => {
    const mockHandler = jest.fn()
    const component = render(<UserIcon height={20} width={20} onClick={mockHandler} />)
    const svgElement = component.getByTestId('user-icon');
    fireEvent.click(svgElement)
    expect(mockHandler).toHaveBeenCalledTimes(1)
})