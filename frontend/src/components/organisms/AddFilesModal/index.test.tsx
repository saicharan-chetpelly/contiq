import { screen, render, fireEvent } from '@testing-library/react';
import { AddFilesModal } from '.';
import { ADD_FILES, FOLDERS_DATA } from '@src/utils/constants';

const mockProps = {
  handleZemDecksClick: jest.fn()
};

describe('Add files modal  test cases', () => {
  it('Add files modal renders as expected', () => {
    render(
      <AddFilesModal {...mockProps} folders={FOLDERS_DATA} openModal={true} />
    );
    const title = screen.getByText(ADD_FILES);
    expect(title).toBeInTheDocument();
  });
  it('Clicking zemdecks folder', () => {
    render(
      <AddFilesModal {...mockProps} folders={FOLDERS_DATA} openModal={true} />
    );
    const zemdecksFolder = screen.getByTestId('drive-folder-Zem decks');
    fireEvent.click(zemdecksFolder);
    const backbutton = screen.getByRole('button', { name: 'Back' });
    fireEvent.click(backbutton);
  });
});
