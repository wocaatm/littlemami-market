import { useContract, useNFTs, useValidDirectListings } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
// import NFTGrid from "../components/NFT/NFTGrid";
import Skeleton from "../components/Skeleton/Skeleton";
import { NFT_COLLECTION_ADDRESS, MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import ListingWrapper from "@/components/ListingWrapper/ListingWrapper";
import styles from "../styles/Buy.module.css";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  // const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { contract } = useContract(MARKETPLACE_ADDRESS, 'marketplace-v3')
  const {
    data: directListings,
    isLoading,
    error,
  } = useValidDirectListings(
    contract,
    {
      count: 100, // Number of listings to fetch
      start: 0, // Start from this index (pagination)
      tokenContract: NFT_COLLECTION_ADDRESS, // Only show NFTs from this collection
    },
  );
  return (
    <Container maxWidth="lg">
      <h1>Buy NFTs</h1>
      <p>Browse which NFTs are available from the collection.</p>
      <div className={styles.nftGridContainer}>
        { isLoading ? (
            [...Array(20)].map((_, index) => (
              <div key={index} className={styles.nftContainer}>
                <Skeleton key={index} width={"100%"} height="312px" />
              </div>
            ))
          ) : directListings && directListings.length === 0 ? (
            <p>Nothing for sale yet! Head to the sell tab to list an NFT.</p>
          ) : (
            directListings?.map((listing) => (
              <ListingWrapper listing={listing} key={listing.id} />
            ))
          )}
      </div>
    </Container>
  );
}
