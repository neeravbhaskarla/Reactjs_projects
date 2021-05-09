import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greetings from './Greetings'

describe('Greeting Component',()=>{
    test('Greeting text working render',()=>{
        //Arrange
        render(<Greetings/>)
    
        //Act
        //.....nothing
    
        //Assert
        const linkElement = screen.getByText('Hello World',{exact: false})
        expect(linkElement).toBeInTheDocument();
    })
    test('renders Normal Text',()=>{
        render(<Greetings/>)

        const linkElement = screen.getByText('normal text',{exact: false})
        expect(linkElement).toBeInTheDocument();
    })
    test('renders Hidden Text',()=>{
        //Arrange
        render(<Greetings/>)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        const linkElement = screen.getByText('hidden text',{exact: false})
        expect(linkElement).toBeInTheDocument(); 
    }) 
    test('paragraph test disappears',()=>{
        //Arrange
        render(<Greetings/>)

        //Act 
        const buttonElement  = screen.getByRole('button')
        userEvent.click(buttonElement) 

        //Assert
        const linkElement = screen.queryByText('Hello World', {exact: false}) 
        expect(linkElement).toBeNull()
    })
})