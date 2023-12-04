import { Button } from 'tanane-lib-ui';

import css from './Styles.module.scss'

interface PaginationDefaultRenderProps {
    page: number;
    pages: number[] | null;
    isNextDisabled: boolean;
    isPreviousDisabled: boolean;
    handlePageChange: (page: number) => void;
}

const PaginationDefaultRender: React.FC<PaginationDefaultRenderProps> = ({
    page,
    pages,
    isNextDisabled,
    isPreviousDisabled,
    handlePageChange
}) => {
    return (
        <div className={css.pages}>
            <Button
                variant="text"
                color="secondary"
                onClick={() => handlePageChange(page - 1)}
                disabled={isNextDisabled}
            >
                Previous
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
                Next
            </Button>
        </div>
    );
};

export default PaginationDefaultRender;