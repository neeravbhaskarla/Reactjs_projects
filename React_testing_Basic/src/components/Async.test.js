import {screen, render} from '@testing-library/react'
import Async from './Async'

describe('Async Component',()=>{
    test('Posts Rendering Success??', async()=>{
        //Arrange
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({ 
            json: async()=>[{id: 'n1', title: 'This is First Post'}]
        })
        render(<Async/>)

        //Act
        //...nothing

        //Assert
        const listElements = await screen.findAllByRole('listitem')
        expect(listElements).not.toHaveLength(0)   

    })
})