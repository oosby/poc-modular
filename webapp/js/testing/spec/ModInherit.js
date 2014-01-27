define(['src/globals/utils'], function(utils) {
    var TestMod = Object.create(utils.pMod);
        
    TestMod.childMod = {
        method1: function() {
            console.log('%cmethod1 %o', 'color:magenta', this);
        },
        start: function() {
            TestMod.childMod.method1();
        }
    }

    Object.defineProperty(TestMod.childMod, 'name', {
        value: 'childMod',
        writable: false  
    });

    describe("ModuleInheritance", function() {

        it("have an init method", function() {
            expect(TestMod.init).not.toBe(null)
        });
    });

    describe('moduleCreation', function() {
        // Mod.init(Mod.tile, els, 'start', {key : 'value'})
        TestMod.init(TestMod.childMod, null, 'start');

        it('should be added to siteModules', function() {
            expect(utils.siteModules.childMod).not.toBe(null);
        });

        it('should have a callback function', function() {
            expect(utils.siteModules.childMod.startFn).toBe('start');
        })
    });
})