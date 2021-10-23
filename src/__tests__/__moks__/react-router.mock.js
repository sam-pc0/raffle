const originalModule = jest.requireActual("react-router-dom");

export default {
  __esModule: true,
  ...originalModule,
  // add your noops here
  useParams: jest.fn(),
  useHistory: jest.fn(),
};
test.skip('skip', () => {});
