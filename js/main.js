app.controller('MainController', ['$scope', function($scope) {
  $scope.infos =[
  {
    name: 'Full Name',
    value: 'Rajhi Fedi'
  },
  {
    name: 'Birthday',
    value: '17 Jul 1996'
  },
  {
    name: 'Address',
    value: 'Tunisia'
  },
  {
    name: 'E-mail',
    value: 'admin@fedirjh.com'
  },
  {
    name: 'Phone',
    value: '+21653395263'
  },
  {
    name: 'Freelance',
    value: 'Available'
  }
];
  $scope.langs =[
  {
    name: 'Arabic',
    value: '100',
    tag: 'Native'
  },
  {
    name: 'English',
    value: '80',
    tag: 'Fluent'
  },
  {
    name: 'French',
    value: '70',
    tag: 'Intermediate'
  },
  {
    name: 'Italian',
    value: '35',
    tag: 'beginner'
  },
  {
    name: 'Spannish',
    value: '10',
    tag: 'beginner'
  }
  ];
  $scope.skills =[
  {
    name: 'HTML/CSS',
    value: '90'
  },
  {
    name: 'PHP/MySql',
    value: '70'
  },
  {
    name: 'Javascript',
    value: '70'
  },
  {
    name: 'NodeJS',
    value: '30'
  },
  {
    name: 'AngularJS',
    value: '50'
  },
  {
    name: 'ReactJS',
    value: '50'
  },
  {
    name: 'Git',
    value: '50'
  }];
  $scope.addskills =[
  {
    name: 'Illustrator',
    value: '50'
  },
  {
    name: 'C++',
    value: '30'
  },
  {
    name: 'Java',
    value: '30'
  },
  {
    name: 'C',
    value: '40'
  }];
  $scope.employment =[
    {
    title: 'Web Designer',
    date: 'March 2011',
    period: '2011-2013',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
  },
  {
    title: 'Web Developer',
    date: 'March 2014',
    period: '2014-2016',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
  },
  {
    title: 'Manager',
    date: 'July 2016',
    period: '2016-Present',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
  }];
  $scope.education =[
    {
    title: 'Web Designer',
    date: 'March 2007',
    period: '2007-2009',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
  },
  {
    title: 'Web Developer',
    date: 'March 2009',
    period: '2009-2010',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
  },
  {
    title: 'Manager',
    date: 'July 2010',
    period: '2010-2012',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
  }];
  $scope.projects =[
    {
      title: 'Web Designer',
      img: 'img/macos-sierra-2.jpg',
      description: 'An immersive, three-day experience focused on exploring the next generation of technology, mobile and beyond.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
    },{
      title: 'Web Designer',
      img: 'img/macos-sierra-2.jpg',
      description: 'An immersive, three-day experience focused on exploring the next generation of technology, mobile and beyond.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
    },{
    title: 'Web Designer',
    img: 'img/macos-sierra-2.jpg',
    description: 'An immersive, three-day experience focused on exploring the next generation of technology, mobile and beyond.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
  },
  {
    title: 'Web Designer',
    img: 'img/macos-sierra-2.jpg',
    description: 'An immersive, three-day experience focused on exploring the next generation of technology, mobile and beyond.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscingVivamus sit amet ligula non lectus cursus egestas. Cras erat lorem, fringilla quis sagittis in, sagittis inNam leo tortor Nam leo tortor Vivamus.'
  }];
  $scope.cinfos =[
  {
    name: 'E-mail',
    value: 'admin@fedirjh.com'
  },
  {
    name: 'Phone',
    value: '+21653395263'
  },
  {
    name: 'Skype',
    value: 'fedi.rajhi'
  },
  {
    name:'Address',
    value:'Lorem ipsum dolor sit amet, consectetur '
  },
  {
    name:'Website',
    value:'http://fedirjh.com'
  }
];
$scope.services =[
{
  name: 'Development',
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus cursus lectus vel pellentesque. Etiam tincidunt.',
  col: '4'
},
{
  name: 'Design',
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus cursus lectus vel pellentesque. Etiam tincidunt.',
  col: '4'
},
{
  name: 'Seo',
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus cursus lectus vel pellentesque. Etiam tincidunt.',
  col: '4'
},
{
  name:'Analytics',
  value:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus cursus lectus vel pellentesque. Etiam tincidunt.',
  col: '6'
},
{
  name:'Marketing',
  value:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus cursus lectus vel pellentesque. Etiam tincidunt.',
  col: '6'
}
];
$scope.clients =[
{
  name: 'Client 1',
  value: 'description',
  col: '4'
},
{
  name: 'Client 2',
  value: 'description',
  col: '4'
},
{
  name: 'Client 3',
  value: 'description',
  col: '4'
},
{
  name: 'Client 4',
  value: 'description',
  col: '6'
},
{
  name: 'Client 4',
  value: 'description',
  col: '6'
}
];
}]);
