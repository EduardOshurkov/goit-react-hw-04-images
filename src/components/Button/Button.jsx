import { Button, ButtonWraper } from "./Button.styled"

export default function LoadMoreBtn({ onLoadMore }) {
    return (
        <ButtonWraper>
            <Button type="button" onClick={onLoadMore}>Load more</Button>
        </ButtonWraper>
    )
}

