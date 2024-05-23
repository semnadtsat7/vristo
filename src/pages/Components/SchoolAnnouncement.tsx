import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconMessageDots from '../../components/Icon/IconMessageDots';
import IconPencil from '../../components/Icon/IconPencil';
import IconTrashLines from '../../components/Icon/IconTrashLines';


const MediaObject = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Media Object'));
    });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [codeArr, setCodeArr] = useState<string[]>([]);

    const toggleCode = (name: string) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>School Announcement</span>
                </li>
            </ul>
            <div className="pt-5 grid xl:grid-cols-2 grid-cols-1 gap-6">
                {/* Notation Icon */}
                <div className="panel">
                    <div className="mb-5">
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-lg mb-2 text-primary">Heading School</h4>
                                <p className="media-text mb-4">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                                <ul className="flex space-x-4 rtl:space-x-reverse font-bold">
                                    <li>
                                        <button type="button" className="flex items-center hover:text-primary">
                                            <IconMessageDots className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
                                            Reply
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="flex items-center hover:text-primary">
                                            <IconPencil className="w-3.5 h-3.5 ltr:mr-1 rtl:ml-1" />
                                            Edit
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="flex items-center hover:text-primary">
                                            <IconTrashLines className="w-4 h-4 ltr:mr-1 rtl:ml-1" />
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default MediaObject;
