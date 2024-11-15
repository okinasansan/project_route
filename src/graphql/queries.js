/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoute = /* GraphQL */ `
  query GetRoute($id: ID!) {
    getRoute(id: $id) {
      id
      name
      description
      spots {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRoutes = /* GraphQL */ `
  query ListRoutes(
    $filter: ModelRouteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoutes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSpot = /* GraphQL */ `
  query GetSpot($id: ID!) {
    getSpot(id: $id) {
      id
      address
      work
      genre
      characters {
        nextToken
        __typename
      }
      routes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSpots = /* GraphQL */ `
  query ListSpots(
    $filter: ModelSpotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const spotsByGenreAndId = /* GraphQL */ `
  query SpotsByGenreAndId(
    $genre: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSpotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    spotsByGenreAndId(
      genre: $genre
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const searchSpots = /* GraphQL */ `
  query SearchSpots(
    $filter: SearchableSpotFilterInput
    $sort: [SearchableSpotSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableSpotAggregationInput]
  ) {
    searchSpots(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
              __typename
            }
          }
        }
        __typename
      }
      __typename
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      name
      spotID
      spot {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        spotID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const charactersBySpotIDAndId = /* GraphQL */ `
  query CharactersBySpotIDAndId(
    $spotID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    charactersBySpotIDAndId(
      spotID: $spotID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        spotID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRouteSpots = /* GraphQL */ `
  query GetRouteSpots($id: ID!) {
    getRouteSpots(id: $id) {
      id
      routeId
      spotId
      route {
        id
        name
        description
        owner
        createdAt
        updatedAt
        __typename
      }
      spot {
        id
        address
        work
        genre
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listRouteSpots = /* GraphQL */ `
  query ListRouteSpots(
    $filter: ModelRouteSpotsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRouteSpots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        routeId
        spotId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const routeSpotsByRouteId = /* GraphQL */ `
  query RouteSpotsByRouteId(
    $routeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRouteSpotsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    routeSpotsByRouteId(
      routeId: $routeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        routeId
        spotId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const routeSpotsBySpotId = /* GraphQL */ `
  query RouteSpotsBySpotId(
    $spotId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRouteSpotsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    routeSpotsBySpotId(
      spotId: $spotId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        routeId
        spotId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
