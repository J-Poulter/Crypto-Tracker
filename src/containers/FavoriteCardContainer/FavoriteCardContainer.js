import React from 'react';
import { connect } from 'react-redux';
import './FavoriteCardContainer.css';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard'

const FavoriteCardContainer = ({favorites}) => {
  const allFavorites = favorites.map(favorite => {
    return(
      <FavoriteCard key={favorite.id} favorite={favorite} />
    )
  })

  return (
    <>
      <h1 className='page-title'>Your Favorite Cryptos:</h1>
      <section className='favorites-container'>
        {allFavorites}
      </section>
    </>
  )
}

const mapStateToProps = (state) =>({ 
  favorites: state.favorites
})

export default connect(mapStateToProps)(FavoriteCardContainer);
