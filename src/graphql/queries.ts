// tslint:disable
// this is an auto generated file. This will be overwritten

export const getStory = `query GetStory($id: ID!) {
  getStory(id: $id) {
    id
    title
    description
    author
    image
  }
}
`;
export const listStorys = `query ListStorys(
  $filter: ModelStoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      author
      image
    }
    nextToken
  }
}
`;
