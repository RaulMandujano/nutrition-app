import getRecipe from '../../apis/getRecipe';

const RecipePage = props => {
    console.log(props);
    return (
        <div>Recipe Page</div>
    )
}


export const getServerSideProps = async context => {
    const recipe = await getRecipe(context.query.recipeId)
    return {props: recipe}
}

export default RecipePage;