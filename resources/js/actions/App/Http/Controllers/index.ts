import HomePageIndexController from './HomePageIndexController'
import TreesPageIndexController from './TreesPageIndexController'
import TreesShowController from './TreesShowController'
import VisitPageIndexController from './VisitPageIndexController'
import AvailabilityIndexController from './AvailabilityIndexController'
const Controllers = {
    HomePageIndexController: Object.assign(HomePageIndexController, HomePageIndexController),
TreesPageIndexController: Object.assign(TreesPageIndexController, TreesPageIndexController),
TreesShowController: Object.assign(TreesShowController, TreesShowController),
VisitPageIndexController: Object.assign(VisitPageIndexController, VisitPageIndexController),
AvailabilityIndexController: Object.assign(AvailabilityIndexController, AvailabilityIndexController),
}

export default Controllers