import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {api} from "./api/api";
import userEvent from "@testing-library/user-event";
import {UserType} from "./types/types";

jest.mock('./api/api', () => ({
  api: {
    getUsers: jest.fn()
  }
}))

const hits: UserType[] = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
]

describe('App', () => {
  it('App component renders', ()=> {
    render(<App/>)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter user name")).toBeInTheDocument()
  })

  it('Get users from api', async ()=> {
    (api.getUsers as jest.Mock).mockResolvedValueOnce(hits)
    render(<App />)
    userEvent.click(screen.getByRole('button'))
    expect(api.getUsers).toHaveBeenCalledTimes(1)
    const user1 = await screen.findByText(/Bret/)
    const user2 = await screen.findByText(/Antonette/)
    expect(user1).toBeInTheDocument()
    expect(user2).toBeInTheDocument()
  })

  it('Get users from api rejected', async ()=> {
    (api.getUsers as jest.Mock).mockRejectedValueOnce({message: 'Something went wrong'})
    render(<App />)
    userEvent.click(screen.getByRole('button'))
    const message = await screen.findByText(/Something went wrong/)
    expect(api.getUsers).toHaveBeenCalledTimes(1)
    expect(message).toBeInTheDocument()
  })
});
