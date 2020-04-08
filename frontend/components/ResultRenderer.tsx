import { ListItemText, SvgIcon, Typography } from '@material-ui/core';
import React from 'react';
import { Spell } from '../models/spell';

export const ResultRenderer: React.FunctionComponent<{type: string, data: any}> = (props) => {
    const { data } = props;
    switch (props.type) {
        case 'spells':
            const spell: Spell = data as Spell;
            return (
                <>
                    <ListItemText
                        primary={spell.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    {spell.short_description}
                                </Typography>
                                <p><strong>school:</strong> {spell.school}{spell.subschool ? ':'+spell.subschool : ''}<br/>
                                <strong>level:</strong> {spell.spell_level}</p>
                            </React.Fragment>
                        }
                    />
                </>
            );
        case 'feats':
            return <p>feat: {data.name}</p>
        case 'monsters':
            return <p>monster: {data.name}</p>
        case 'items':
            return <p>item: {data.name}</p>
        default:
        return null;
    }
}
