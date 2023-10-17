import styles from './Accordion.module.css';

export default function Accordion({title}) {
    function animateAccordionEntries(e) {
        var accTrigger = e.target;
        var accContent = e.target.nextElementSibling;
        var accContainerItem = e.target.parentNode;
        var accContainer = e.target.parentNode.parentNode;
        var allHeaders = accContainer.querySelectorAll("[class*=accordionItem]");

        if(accContainerItem.classList.contains(styles.active)){
            accContainerItem.classList.remove(styles.active);
        } else {
            allHeaders.forEach(function(element) {
                element.classList.remove(styles.active);
            });
            accContainerItem.classList.add(styles.active);
        }
    }

    return <div className={styles.accordion}>My wonderfull Accordion
                <div className={styles.accordionItem}>
                    <div className={styles.accordionItemHeader} onClick={animateAccordionEntries}>
                        head1
                    </div>
                    <div className={styles.accordionItemContent}>
                        content1<br/>content2<br/>content2<br/>content2
                    </div>
                </div>
                <div className={styles.accordionItem}>
                    <div className={styles.accordionItemHeader} onClick={animateAccordionEntries}>
                        head2
                    </div>
                    <div className={styles.accordionItemContent}>
                        content2<br/>content2<br/>content2<br/>content2<br/>content2<br/>content2<br/>content2<br/>content2
                    </div>
                </div>
                <div className={styles.accordionItem}>
                    <div className={styles.accordionItemHeader} onClick={animateAccordionEntries}>
                        head3
                    </div>
                    <div className={styles.accordionItemContent}>
                        content3<br/>content2<br/>content2<br/>content2
                    </div>
                </div>
           </div>;
}
