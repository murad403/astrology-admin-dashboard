/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import countryList from 'react-select-country-list';

const Select = dynamic(() => import('react-select'), {
    ssr: false,
    loading: () => <p className="text-gray-500">Loading countries...</p>,
});

const CountrySelect = ({birthCountry, setBirthCountry}: {birthCountry: string, setBirthCountry: any}) => {
    const [isMounted, setIsMounted] = useState(false);

    const options = useMemo(() => countryList().getData(), []);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="w-full max-w-md">
                <div className="h-12 bg-gray-200 border border-gray-300 rounded-lg animate-pulse" />
            </div>
        );
    }

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            minHeight: "42px",
            height: "42px",
            backgroundColor: "transparent",
            borderRadius: "12px",
            padding: "0 12px",
            fontSize: "14px",
            fontWeight: "400",
            border: "1px solid #2D3554",
            "&:hover": {
                borderColor: "1px solid #2D3554",
            },
            "&:focus-within": {
                outline: "none",
                boxShadow: "none",
            },
        }),
        input: (provided: any) => ({
            ...provided,
            color: "hsl(var(--header))",
            margin: "0",
            padding: "0",
        }),
        placeholder: (provided: any) => ({
            ...provided,
            color: "hsl(var(--muted-foreground))",
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: "hsl(var(--header))",
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? "hsl(var(--main))" : state.isFocused ? "hsl(var(--muted))" : "white",
            color: state.isSelected ? "white" : "hsl(var(--header))",
            cursor: "pointer",
            padding: "8px 12px",
            
        }),
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }),
        menuList: (provided: any) => ({
            ...provided,
            padding: "4px 0",
        }),
    }

    const handleChangeCountry = (value: any) =>{
        setBirthCountry(value?.label);
    }

    return (
        <div className='w-[230px]'>
            <Select
                options={options}
                onChange={handleChangeCountry}
                placeholder={birthCountry}
                isSearchable
                isClearable
                instanceId="country-select"
                styles={customStyles}
            />
        </div>
    );
};

export default CountrySelect;