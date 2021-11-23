import { useRef, useEffect, useState } from 'react';
import Isotope from 'isotope-layout';
import styled from 'styled-components';
import GalleryCard from './GalleryCard';

const StyledIsotopeGallery = styled.section`
    ul {
        padding: 0;
    }

    li {
        list-style-type: none;
        float: left;
    }

    li a {
        text-decoration: none;
        color: ${props => props.theme.color.foreground};
    }

    .filters-container {
        height: 50px;
    }

    .filters-container li {
        margin: 1rem;
    }

    .filters-container li a:hover {
        cursor: pointer;
        color: ${props => props.theme.color.primary};
    }

    .filters-container li a.selected {
        color: ${props => props.theme.color.primary};
        text-decoration: underline;
    }
`;

export default function IsotopeGallery() {
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        isotope.current = new Isotope('.filtered-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
        });
        return () => isotope.current.destroy();
    }, []);

    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: '*' })
            : isotope.current.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const handleFilterKeyChange = key => () => setFilterKey(key);

    return (
        <StyledIsotopeGallery>
            <ul className='filters-container'>
                <li>
                    <a onClick={handleFilterKeyChange('*')} className={filterKey === '*' ? 'selected' : ''}>
                        All
                    </a>
                </li>
                <li>
                    <a
                        onClick={handleFilterKeyChange('typeScript')}
                        className={filterKey === 'typeScript' ? 'selected' : ''}
                    >
                        TypeScript
                    </a>
                </li>
                <li>
                    <a
                        onClick={handleFilterKeyChange('javaScript')}
                        className={filterKey === 'javaScript' ? 'selected' : ''}
                    >
                        JavaScript
                    </a>
                </li>
                <li>
                    <a onClick={handleFilterKeyChange('nodejs')} className={filterKey === 'nodejs' ? 'selected' : ''}>
                        Node.js
                    </a>
                </li>
                <li>
                    <a onClick={handleFilterKeyChange('react')} className={filterKey === 'react' ? 'selected' : ''}>
                        React
                    </a>
                </li>
                <li>
                    <a onClick={handleFilterKeyChange('jquery')} className={filterKey === 'jquery' ? 'selected' : ''}>
                        JQuery
                    </a>
                </li>
                <li>
                    <a onClick={handleFilterKeyChange('blazor')} className={filterKey === 'blazor' ? 'selected' : ''}>
                        C# Blazor
                    </a>
                </li>
            </ul>

            <ul className='filtered-container'>
                <li className='filter-item typeScript'>
                    <GalleryCard projectTitle='typeScript' />
                </li>
                <li className='filter-item typeScript jquery'>
                    <GalleryCard projectTitle='typeScript jquery' />
                </li>
                <li className='filter-item typeScript javaScript'>
                    <GalleryCard projectTitle='typeScript javaScript' />
                </li>
                <li className='filter-item javaScript nodejs'>
                    <GalleryCard projectTitle='javaScript nodejs' />
                </li>
                <li className='filter-item javaScript react'>
                    <GalleryCard projectTitle='javaScript react' />
                </li>
                <li className='filter-item react nodejs'>
                    <GalleryCard projectTitle='react nodej' />
                </li>
                <li className='filter-item javaScript react'>
                    <GalleryCard projectTitle='javaScript react' />
                </li>
                <li className='filter-item javaScript nodejs jquery'>
                    <GalleryCard projectTitle='javaScript nodejs jquery' />
                </li>
                <li className='filter-item javaScript jquery'>
                    <GalleryCard projectTitle='javaScript jquery' />
                </li>
                <li className='filter-item javaScript nodejs'>
                    <GalleryCard projectTitle='javaScript nodejs' />
                </li>
                <li className='filter-item blazor jquery'>
                    <GalleryCard projectTitle='blazor jquery' />
                </li>
            </ul>
        </StyledIsotopeGallery>
    );
}
