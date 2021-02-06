
// Tab Menu Navigator Styling
<Navigator
      tabBarOptions={{
        showIcon: true,
        style: {...styles.navigator},
        tabStyle: {
          backgroundColor: '#fff',
        },
      }}
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {IS_IPHONE_X && (
            <View style={[styles.xFillLine, {
              backgroundColor: barColor
            }]}/>
          )}
        </View>
      )}>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // SHADOW
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },
});