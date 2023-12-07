import { Button } from 'tanane-lib-ui';

import css from './Styles.module.scss'

type Options = {
    previous: string | JSX.Element,
    next: string | JSX.Element
    displayText: string,
    itemsText: string
  }

interface PaginationDefaultRenderProps {
    page: number;
    options: Options;
    pages: number[] | null;
    isNextDisabled: boolean;
    isPreviousDisabled: boolean;
    handlePageChange: (page: number) => void;
}

const PaginationDefaultRender: React.FC<PaginationDefaultRenderProps> = ({
    page,
    pages,
    options,
    isNextDisabled,
    handlePageChange,
    isPreviousDisabled,
}) => {
    return (
        <div className={css.pages}>
            <Button
                size="large"
                variant="text"
                color="secondary"
                onClick={() => handlePageChange(page - 1)}
                disabled={isNextDisabled}
            >
                {options.next}
            </Button>

            {pages?.map(pageNumber => (
                pageNumber < 0 ? <span key={pageNumber}>...</span> : (
                    <Button
                        key={pageNumber}
                        variant="text"
                        color={page === pageNumber ? 'primary' : 'secondary'}
                        onClick={() => handlePageChange(pageNumber)}
                    >
                        {pageNumber}
                    </Button>
                )
            ))}

            <Button
                variant="text"
                color="secondary"
                onClick={() => handlePageChange(page + 1)}
                disabled={isPreviousDisabled}
            >
                {options.previous}
            </Button>
        </div>
    );
};

export default PaginationDefaultRender;