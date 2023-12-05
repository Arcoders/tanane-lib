import css from './Styles.module.scss'

interface ItemsPerPageProps {
    itemsPerPage: number;
    handelOnItemsPerPage: (itemsPerPage: number) => void;
}

const ItemsPerPage: React.FC<ItemsPerPageProps>  = ({ itemsPerPage, handelOnItemsPerPage }) => (
    <div className={css.items}>
        <span>Display</span>
        <input
            min="1"
            type="number"
            placeholder={itemsPerPage.toString()}
            onChange={({ target: { value } }) => {
                value && handelOnItemsPerPage(parseInt(value))
            }}
        />
        <span>rows.</span>
    </div>
);

export default ItemsPerPage;