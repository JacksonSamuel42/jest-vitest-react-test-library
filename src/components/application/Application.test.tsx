import '@testing-library/jest-dom';
import React from 'react';
import {render} from '@testing-library/react';
import Application from './Application';

describe('Application', () => {
	test('renders correctly', () => {
		const {getByRole, getByLabelText, getByPlaceholderText, getByText, getByDisplayValue, getByAltText, getByTitle, getByTestId} = render(<Application />);

        const pageHeading = getByRole('heading', {level: 1})
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = getByRole('heading', {level: 2})
        expect(sectionHeading).toBeInTheDocument()

		const nameElement = getByRole('textbox', {name: 'Name'});
		expect(nameElement).toBeInTheDocument();

		const nameElement2 = getByLabelText('Name', {selector: 'input'})
		expect(nameElement2).toBeInTheDocument()

		const nameElement3 = getByPlaceholderText('FullName')
		expect(nameElement3).toBeInTheDocument() 

		const paragraphElement = getByText('All fields are mandatory')
		expect(paragraphElement).toBeInTheDocument()

        const bioElement = getByRole('textbox', {name: 'Bio'})
        expect(bioElement).toBeInTheDocument()

		const displayValueElement = getByDisplayValue('Jackson')
		expect(displayValueElement).toBeInTheDocument()

		const imgAltTextElement = getByAltText('a person with a laptop')
		expect(imgAltTextElement).toBeInTheDocument()

		const closeElement = getByTitle('close')
		expect(closeElement).toBeInTheDocument()

		const customElement = getByTestId('custom-element')
		expect(customElement).toBeInTheDocument()

		const selectElement = getByRole('combobox', {  name: /job location/i})
		expect(selectElement).toBeInTheDocument()

		const termsElement = getByRole('checkbox');
		expect(termsElement).toBeInTheDocument();

		const submitButton = getByRole('button');
		expect(submitButton).toBeInTheDocument();
		expect(submitButton).not.toBeEnabled()
	});
});
