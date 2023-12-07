import css from './Styles.module.scss'

type Options = {
    previous: string | JSX.Element,
    next: string | JSX.Element
    displayText: string,
    itemsText: string
  }

interface ItemsPerPageProps {
    itemsPerPage: number;
    options: Options,
    handelOnItemsPerPage: (itemsPerPage: number) => void;
}

const ItemsPerPage: React.FC<ItemsPerPageProps>  = ({ itemsPerPage, handelOnItemsPerPage, options }) => (
    <div className={css.items}>
        <span>{options.displayText}</span>
        <input
            min="1"
            type="number"
            placeholder={itemsPerPage.toString()}
            onChange={({ target: { value } }) => {
                value && handelOnItemsPerPage(parseInt(value))
            }}
        />
        <span>{options.itemsText}</span>
    </div>
);

export default ItemsPerPage;