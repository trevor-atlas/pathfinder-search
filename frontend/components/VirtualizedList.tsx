import { ResultRenderer } from '../components/ResultRenderer';
import { ReactComponentLike } from 'prop-types';
import React from 'react';
import { createStyles, Divider, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useResize } from 'react-browser-hooks';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
        },
    }),
);
function renderRow(props: ListChildComponentProps) {
    const { index, style } = props;
    const item = props.data.results[props.index];
    return (
        <ListItem button style={style} key={index} onClick={() => props.data.setSelected(item)}>
            <ResultRenderer type={props.data.type} data={item}/>
            <Divider />
        </ListItem>
    );
}
export const VirtualizedList: React.FunctionComponent<{itemData: any; }> = (props) => {
    const classes = useStyles();
    const { width, height } = useResize();
    const { itemData } = props;

    return (
        <div className={classes.root}>
            <FixedSizeList height={height - 50} width="100%" itemSize={150} itemData={itemData} itemCount={itemData.results.length}>
                {renderRow}
            </FixedSizeList>
        </div>
    );
}
