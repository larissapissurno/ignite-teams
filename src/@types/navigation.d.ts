export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      groups: undefined;
      new: undefined;
      players: {
        group: string;
      };
    }
  }
}

type RouteParamsProps = NativeStackScreenProps<RootStackParamList, "players">;

export type PlayerScreenRouteProp = RouteParamsProps["players"];
