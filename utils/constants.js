import {
    BsPersonFill,
    BsPeopleFill,
    BsTagsFill,
    BsHouseFill,
    BsGlobe,
    BsBookHalf,
    BsFolderFill,
    BsPenFill,
} from 'react-icons/bs';
import {
    BiPoll,
    BiGlobe,
    BiHelpCircle,
    BiUserVoice,
    BiLogOut,
} from 'react-icons/bi';
import { MdRssFeed } from 'react-icons/md';
import { FiActivity } from 'react-icons/fi';

export const headerNavLinks = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About Us',
        url: '/about-us',
    },
    {
        name: 'Contact Us',
        url: '/contact-us',
    },
];

export const navLinks = [
    {
        icon: <BsHouseFill />,
        name: 'Home',
        url: '/',
    },
    {
        icon: <MdRssFeed />,
        name: 'Feed',
        url: '/feed',
    },
    {
        icon: <BsPersonFill />,
        name: 'User Profile',
        url: '/profile/[username]',
    },
    {
        icon: <BsFolderFill />,
        name: 'Communities',
        url: '/communities',
    },
    {
        icon: <BsBookHalf />,
        name: 'Questions',
        url: '#',
        sub: [
            {
                name: 'Most Answered',
                url: '/questions/most-answered',
            },
            {
                name: 'Most Voted',
                url: '/questions/most-voted',
            },
            {
                name: 'Oldest Questions',
                url: '/questions/oldest-questions',
            },
            {
                name: 'Polls',
                url: '/polls',
            },
        ],
    },
    {
        icon: <BiPoll />,
        name: 'Polls',
        url: '/polls',
    },
    {
        icon: <BsGlobe />,
        name: 'Groups',
        url: '/groups',
    },
    {
        icon: <BiGlobe />,
        name: 'Add Group',
        url: '/add-group',
    },
    {
        icon: <BsTagsFill />,
        name: 'Tags',
        url: '/tags',
    },
    {
        icon: <BsPeopleFill />,
        name: 'Users',
        url: '/users',
    },
    {
        icon: <BiHelpCircle />,
        name: 'Help',
        url: '/faqs',
    },
];

export const faqQuestions = [
    {
        _id: 1,
        question: 'What topics can I ask about here?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },
    {
        _id: 2,
        question: 'What types of questions should I avoid asking?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },
    {
        _id: 3,
        question: 'What does it mean if a question is?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },
    {
        _id: 4,
        question: 'How to create a Minimal, Complete, and Verifiable example?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },
    {
        _id: 5,
        question:
            'What if I disagree with the closure of a question? How to reopen it?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },
    {
        _id: 6,
        question:
            'Why do I see a message that my question does not meet standards?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },

    {
        _id: 7,
        question: 'Why are some questions marked as duplicate?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },
    {
        _id: 8,
        question: 'Why are questions no longer being accepted from my account?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },
    {
        _id: 9,
        question:
            'Why is the system asking me to wait a day before asking another?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },
    {
        _id: 10,
        question: 'How do I ask a good question?',
        answer: 'Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.',
    },
];

export const dropDownMenu = [
    {
        _id: 0,
        name: 'User Profile',
        icon: <BsPersonFill />,
        url: '/profile/[username]',
    },
    {
        _id: 1,
        name: 'Edit Profile',
        icon: <BsPenFill />,
        url: '/profile/[username]/edit',
    },
    {
        _id: 2,
        name: 'Groups',
        icon: <BsGlobe />,
        url: '/groups',
    },
    {
        _id: 3,
        name: 'Asked Questions',
        icon: <BiUserVoice />,
        url: '/questions/asked-questions',
    },
    {
        _id: 4,
        name: 'Activity Log',
        icon: <FiActivity />,
        url: '/profile/[username]/activities',
    },
    {
        _id: 5,
        name: 'Logout',
        icon: <BiLogOut />,
        url: '/logout',
    },
];

export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const profilePageLinks = [
    {
        name: 'About',
        link: '/profile/[username]',
    },
    {
        name: 'Questions',
        link: '/profile/[username]/questions',
    },
    {
        name: 'Polls',
        link: '/profile/[username]/polls',
    },
    {
        name: 'Answers',
        link: '/profile/[username]/answers',
    },
    {
        name: 'Best Answers',
        link: '/profile/[username]/best-answers',
    },
];

export const qstnPageLinks = [
    {
        name: 'Recent Questions',
        link: '/',
    },
    {
        name: 'Most Answered',
        link: '/questions/most-answered',
    },
    {
        name: 'Most Voted',
        link: '/questions/most-voted',
    },
    {
        name: 'Most Visited',
        link: '/questions/most-visited',
    },
    {
        name: 'Polls',
        link: '/questions/polls',
    },
    {
        name: 'Oldest Questions',
        link: '/questions/oldest-questions',
    },
    {
        name: 'Answers',
        link: '/questions/answers',
    },
    {
        name: 'No Answers',
        link: '/questions/no-answers',
    },
];

export const editProfilePageLinks = [
    {
        name: 'Edit Profile',
        link: '/profile/[username]/edit',
    },
    {
        name: 'Change password',
        link: '/profile/[username]/change-password',
    },
    {
        name: 'Delete account',
        link: '/profile/[username]/delete',
    },
];

export const countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas (the)',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia (Plurinational State of)',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory (the)',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands (the)',
    'Central African Republic (the)',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands (the)',
    'Colombia',
    'Comoros (the)',
    'Congo (the Democratic Republic of the)',
    'Congo (the)',
    'Cook Islands (the)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    "Côte d'Ivoire",
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic (the)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands (the) [Malvinas]',
    'Faroe Islands (the)',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories (the)',
    'Gabon',
    'Gambia (the)',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See (the)',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea (the Democratic People's Republic of)",
    'Korea (the Republic of)',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic (the)",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands (the)',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia (Federated States of)',
    'Moldova (the Republic of)',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands (the)',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger (the)',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands (the)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines (the)',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of North Macedonia',
    'Romania',
    'Russian Federation (the)',
    'Rwanda',
    'Réunion',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan (the)',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands (the)',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates (the)',
    'United Kingdom of Great Britain and Northern Ireland (the)',
    'United States Minor Outlying Islands (the)',
    'United States of America (the)',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela (Bolivarian Republic of)',
    'Viet Nam',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
    'Åland Islands',
];
