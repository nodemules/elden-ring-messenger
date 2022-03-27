import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders elden ring message generator heading', () => {
    render(<App/>);

    const h1 = screen.getByText('Elden Ring Message Generator');
    expect(h1).toBeInTheDocument();
});

test('renders templates', () => {
    render(<App/>)

    const div = screen.getByText('Templates')
    expect(div).toBeInTheDocument()
})

test('renders template options', () => {
    render(<App/>)

    const btn = screen.getByText('**** ahead', {selector: 'button'})
    expect(btn).toBeInTheDocument()
})

test('renders chosen templates', () => {
    render(<App/>)
    fireEvent.click(screen.getByText('**** ahead', {selector: 'button'}))

    const rendered = screen.getByText('**** ahead', {selector: 'div'})
    expect(rendered).toBeInTheDocument()
})

test('renders words', () => {
    render(<App/>)
    fireEvent.click(screen.getByText('**** ahead', {selector: 'button'}))

    const div = screen.getByText('Words')
    expect(div).toBeInTheDocument()
})

test('renders word options', () => {
    render(<App/>)
    fireEvent.click(screen.getByText('**** ahead', {selector: 'button'}))

    const btn = screen.getByText('Enemies', {selector: 'button'})
    expect(btn).toBeInTheDocument()
})

test('renders word choice options', () => {
    render(<App/>)
    fireEvent.click(screen.getByText('**** ahead', {selector: 'button'}))
    fireEvent.click(screen.getByText('Enemies', {selector: 'button'}))

    const btn = screen.getByText('enemy', {selector: 'button'})
    expect(btn).toBeInTheDocument()
})

test('renders interpolated template', () => {
    render(<App/>)
    fireEvent.click(screen.getByText('**** ahead', {selector: 'button'}))
    fireEvent.click(screen.getByText('Enemies', {selector: 'button'}))
    fireEvent.click(screen.getByText('enemy', {selector: 'button'}))

    const interpolated = screen.getByText('enemy ahead')
    expect(interpolated).toBeInTheDocument()
})
